import { Skeleton } from "@mui/material";

export default function SkeletonCatalogLoader() {
    const arrStub = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ];

    return (
        <>
            {arrStub.map((item) => {
                return (
                    <Skeleton
                        variant="rounded"
                        height={384}
                        width={288}
                        sx={{ borderRadius: "12px" }}
                        key={item}
                    />
                );
            })}
        </>
    );
}
