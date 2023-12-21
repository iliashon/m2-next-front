export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="container mx-auto p-4">
            <div className="flex">
                <div className="h-3 w-1/3 bg-gr-green rounded-full"></div>
                <div className="h-3 w-1/3 bg-gr-green rounded-full"></div>
                <div className="h-3 w-1/3 bg-gr-green rounded-full"></div>
            </div>
            {children}
        </section>
    );
}
