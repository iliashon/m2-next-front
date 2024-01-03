"use client";

import { Tab, Tabs, styled } from "@mui/material";
import { useState } from "react";
import TabContent from "./TabContent";

interface StyledTabProps {
    label: string;
}

const AntTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "#ababab",
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
        color: "#25A55F",
        opacity: 1,
    },
    "&.Mui-selected": {
        color: "#25A55F",
        fontWeight: theme.typography.fontWeightMedium,
    },
}));

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        width: "100%",
        backgroundColor: "#25A55F",
    },
});

export default function TabsPanel({}: {}) {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <div className="border rounded-lg">
            <StyledTabs value={activeTab} onChange={handleChange}>
                <AntTab label="Details"></AntTab>
                <AntTab label="More Information"></AntTab>
            </StyledTabs>
            <TabContent value={activeTab} index={0}>
                Details
            </TabContent>
            <TabContent value={activeTab} index={1}>
                More Information
            </TabContent>
        </div>
    );
}
