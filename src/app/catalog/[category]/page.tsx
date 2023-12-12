"use client";

export default function Category({ params }: { params: { category: string } }) {
    return <h1 className="text-4xl text-center py-28">{params.category}</h1>;
}
