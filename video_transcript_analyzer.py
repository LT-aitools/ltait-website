#!/usr/bin/env python3
"""
Video Transcript Analyzer for Week 19 Media Assets
Transcribes individual video clips and analyzes content quality
"""

import os
import sys
import subprocess

# Try different ways to import whisper
try:
    import whisper
    print("✅ Whisper imported successfully")
except ImportError as e:
    print(f"❌ Failed to import whisper: {e}")
    print("Please install whisper: pip install openai-whisper")
    sys.exit(1)

def transcribe_video(video_path, output_dir="/tmp"):
    """Transcribe a single video file"""
    print(f"🎯 Transcribing: {os.path.basename(video_path)}")
    
    try:
        # Load model (using tiny for speed, can change to base/small for better accuracy)
        model = whisper.load_model("tiny")
        
        # Transcribe
        result = model.transcribe(video_path)
        
        # Save transcript
        video_name = os.path.splitext(os.path.basename(video_path))[0]
        transcript_path = os.path.join(output_dir, f"{video_name}_transcript.txt")
        
        with open(transcript_path, 'w', encoding='utf-8') as f:
            f.write(result["text"])
        
        print(f"✅ Transcript saved: {transcript_path}")
        return result["text"], transcript_path
        
    except Exception as e:
        print(f"❌ Error transcribing {video_path}: {e}")
        return None, None

def analyze_transcript_quality(transcript_text, video_name):
    """Analyze transcript for content quality"""
    if not transcript_text:
        return "BAD", "No transcript available"
    
    text_lower = transcript_text.lower()
    
    # Bad indicators (administrative/waiting content)
    bad_indicators = [
        "can you see my screen",
        "are you there",
        "hello hello",
        "waiting for",
        "let me check",
        "one second",
        "hold on",
        "technical difficulties",
        "connection issues",
        "can you hear me",
        "testing testing",
        "share my screen",
        "just a minute"
    ]
    
    # Good indicators (actual work content)
    good_indicators = [
        "animation",
        "code",
        "function",
        "implementation",
        "workflow",
        "automation",
        "calendar",
        "email",
        "script",
        "result",
        "testing",
        "character",
        "mascot",
        "svg",
        "logo",
        "generation",
        "video"
    ]
    
    bad_score = sum(1 for indicator in bad_indicators if indicator in text_lower)
    good_score = sum(1 for indicator in good_indicators if indicator in text_lower)
    
    # Determine quality
    if good_score > bad_score and len(transcript_text.strip()) > 50:
        return "GOOD", f"Contains technical content (good: {good_score}, bad: {bad_score})"
    else:
        return "BAD", f"Mostly administrative or short content (good: {good_score}, bad: {bad_score})"

def main():
    media_dir = "/Users/charlottelau/Documents/LTAIT/LTAIT-website/public/blog/media"
    output_dir = "/tmp/week19_transcripts"
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Video files to process
    video_files = [
        "Week 19 - 01720 - SVG Logo Animation with Cursor.mp4",
        "Week 19 - 04810 - Email-to-Calendar Automation.mp4", 
        "Week 19 - 03800 - Video Generation and Workflow Testing.mp4",
        "Week 19 - 01450 - Character-Mascot Creation.mp4"
    ]
    
    results = {}
    
    print("🚀 Starting video transcript analysis...")
    print("=" * 60)
    
    for video_file in video_files:
        video_path = os.path.join(media_dir, video_file)
        
        if not os.path.exists(video_path):
            print(f"❌ Video not found: {video_path}")
            continue
            
        # Transcribe
        transcript, transcript_path = transcribe_video(video_path, output_dir)
        
        if transcript:
            # Analyze quality
            quality, reason = analyze_transcript_quality(transcript, video_file)
            
            results[video_file] = {
                'transcript': transcript,
                'transcript_path': transcript_path,
                'quality': quality,
                'reason': reason
            }
            
            print(f"📊 {video_file}: {quality} - {reason}")
        else:
            results[video_file] = {
                'transcript': None,
                'transcript_path': None,
                'quality': 'ERROR',
                'reason': 'Failed to transcribe'
            }
        
        print("-" * 60)
    
    # Summary report
    print("\n📋 SUMMARY REPORT")
    print("=" * 60)
    
    good_count = sum(1 for r in results.values() if r['quality'] == 'GOOD')
    bad_count = sum(1 for r in results.values() if r['quality'] == 'BAD')
    error_count = sum(1 for r in results.values() if r['quality'] == 'ERROR')
    
    print(f"✅ GOOD videos: {good_count}")
    print(f"❌ BAD videos: {bad_count}")
    print(f"💥 ERROR videos: {error_count}")
    print(f"📊 Quality rate: {good_count}/{len(results)} ({good_count/len(results)*100:.1f}%)")
    
    # Save detailed report
    report_path = os.path.join(output_dir, "quality_analysis_report.txt")
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("Week 19 Video Content Quality Analysis\n")
        f.write("=" * 50 + "\n\n")
        
        for video_file, data in results.items():
            f.write(f"Video: {video_file}\n")
            f.write(f"Quality: {data['quality']}\n") 
            f.write(f"Reason: {data['reason']}\n")
            if data['transcript']:
                f.write(f"Transcript Preview: {data['transcript'][:200]}...\n")
            f.write("-" * 50 + "\n\n")
    
    print(f"📄 Detailed report saved: {report_path}")

if __name__ == "__main__":
    main()