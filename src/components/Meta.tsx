import React from "react";

import { Spacing } from "../constants/dimension";
import FlexView from "./FlexView";
import Text from "./Text";

const Meta = ({ label, text, suffix }: { label: string; text?: string; suffix?: string }) => {
    return (
        <FlexView style={{ justifyContent: "space-between", marginTop: Spacing.tiny, marginHorizontal: Spacing.small }}>
            <Text fontWeight={"bold"} style={{ fontSize: 14 }}>
                {label}
            </Text>
            <Text style={{ fontSize: 14 }}>{(text || "…") + (suffix ? " " + suffix : "")}</Text>
        </FlexView>
    );
};

export default Meta;
