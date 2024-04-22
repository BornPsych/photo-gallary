import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/0b9c5271-e261-4f36-81b5-9e1c2b44ea79-1c77qa.png",
  "https://utfs.io/f/14b67dfb-e67a-4d1a-9027-14bbb2cf8811-4659m1.png",
  "https://utfs.io/f/e0f0a1ed-3395-4dcb-a427-b311b6e85315-1rhq9e.jpeg",
  "https://utfs.io/f/098afba0-d967-4ef6-9fed-c669f5955921-1y9.png",
  "https://utfs.io/f/bc61c02a-630d-48b1-ba04-46a2740f5b29-184fe7.JPG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((images, index) => (
          <div key={images.id + "-" + index} className="w-48">
            <img src={images.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
