import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images].map((images) => (
        <div key={images.id} className="flex w-48 flex-col">
          <img src={images.url} />
          <div>{images.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex w-full justify-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
