import FootballField from "@/assets/images/page_background.jpg";
import BlogDisplay from "./BlogDisplay";
const BlogPost = () => {
  return (
    <div className="grid p-5 gap-2 grid-cols-2">
      <BlogDisplay
        imageSrc={FootballField}
        infoText="Thái Nguyễn Đình"
        releasedDate="18/2/2025"
        title="Drama"
        desc="The primary goal is simple: to score more goals than the opposing team within the allotted time. A goal is scored when the ball fully crosses the opposing team’s goal line between the posts and under the crossbar."
      />
    </div>
  );
};

export default BlogPost;
