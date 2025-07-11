import { prisma } from "@/lib/prisma";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - 444"
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = "";
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price }
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <h1 className="mb-3 text-lg font-semibold">Add Product</h1>
      <form action={addProduct} className="grid w-5/12 gap-4 place-self-center">
        <div>
          <Label className="mb-2 block font-semibold">Product Name</Label>
          <input
            required
            name="name"
            placeholder="Name"
            className="input mb-3 w-full"
          />
        </div>
        <div>
          <Label className="mb-2 block font-semibold">
            Product Description
          </Label>
          <textarea
            required
            name="description"
            placeholder="Description"
            className="textarea textarea-info mb-3 w-full"
          ></textarea>
        </div>
        <div>
          <Label className="mb-2 block font-semibold">Image Source</Label>
          <input
            required
            name="imageUrl"
            placeholder="Image URL"
            type="url"
            className="input mb-3 w-full"
          />
        </div>
        <div>
          <Label className="mb-2 block font-semibold">Price</Label>
          <input
            required
            name="price"
            placeholder="Price"
            type="number"
            className="input mb-3 w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block rounded-lg">
          Add Product
        </button>
      </form>
    </div>
  );
}
