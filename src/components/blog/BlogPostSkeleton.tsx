
import { Skeleton } from "@/components/ui/skeleton";

const BlogPostSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="glass-card p-6 h-full">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <Skeleton className="h-4 w-20 mt-2" />
        </div>
      ))}
    </div>
  );
};

export default BlogPostSkeleton;
