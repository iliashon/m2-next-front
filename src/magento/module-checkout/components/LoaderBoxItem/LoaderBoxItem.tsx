import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function LoaderBoxItem() {
    return (
        <>
            <Skeleton
                variant="rounded"
                height={128}
                sx={{ borderRadius: "10px" }}
            />
            <Skeleton
                variant="rounded"
                height={128}
                sx={{ borderRadius: "10px" }}
            />
            <Skeleton
                variant="rounded"
                height={128}
                sx={{ borderRadius: "10px" }}
            />
        </>
    );
}
