import Link from "next/link";

export default function CartEmpty() {
    return (
        <div className="flex flex-col items-center mt-6">
            <h2 className="text-3xl font-lato">Your basket is empty</h2>
            <Link
                href={`/catalog`}
                className="bg-gr-green mt-6 w-44 h-9 rounded-md text-white font-monts flex justify-center items-center"
            >
                Go catalog
            </Link>
        </div>
    );
}
