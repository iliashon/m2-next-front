"use client";

export default function page({ params }: { params: { category: string } }) {
    return <h1 className="text-4xl text-center py-28">{params.category}</h1>;
}
