"use client";
import { FC, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ISkeletonExampleProps {}

const SkeletonExample: FC<ISkeletonExampleProps> = ({}) => {
    const [loading, setLoading] = useState(true);
    async () => await new Promise(resolve => setTimeout(resolve, 500000000)).then(res => setLoading(false));

    return loading ? <Skeleton width={200} height={200} baseColor="#444444" /> : <div className="sceleton-box">anything inside</div>;
};

export default SkeletonExample;
