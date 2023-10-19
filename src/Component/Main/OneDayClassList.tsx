import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnedayClassListPage from "../../styled/OneDayClassList";
import ClassLocation from "../Fn/Interface/ClassLocation";
import OneDayClassLoad from "../Fn/OneDayClassLoad";
import { useRecoilState } from "recoil";
import { Classs } from "../atom";

const OneDayClassList: React.FC = () => {
    let [getclasslocations, setclasslocations] = useRecoilState<ClassLocation[]>(Classs);

    return (
        <OnedayClassListPage>
            <div className="page-container">
                <div className="class-grid">
                    {getclasslocations.map((classLocation, index) => (
                        <div key={index} className="class-card">
                            <Link to={`/details/${index}`}> {/* 이 부분이 추가된 부분 */}
                                <img src={classLocation.Image} alt={classLocation.Subtitle} />
                                <h2>{classLocation.Subtitle}</h2>
                                <p>매장명: {classLocation.Shop}</p>
                                <p>가격: {classLocation.Price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </OnedayClassListPage>
    );
};

export default OneDayClassList;
