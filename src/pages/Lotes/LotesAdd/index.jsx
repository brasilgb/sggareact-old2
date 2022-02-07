import React from 'react';
import { ABoxAll, ABoxBody, ABoxFooter, ABoxHeader, ABoxHeaderTitle } from '../../../components/Boxes';
import { ABreadcumb } from '../../../components/Breadcumbs';
import { AButtomAdd } from '../../../components/Buttons';
import { AInputSearch } from '../../../components/Forms/Inputs';
import { IconContext } from 'react-icons';
import { IoFileTrayStacked } from "react-icons/io5";
import { ATable, ATd, ATh, ATr } from '../../../components/Tables';
import { Pagination } from '../../../components/Pagination';

const LotesAdd = () => {

    return (
        <ABoxAll>
            <ABoxHeader>
                <ABoxHeaderTitle>
                    <IconContext.Provider value={{ className: "text-xl font-medium" }}>
                        <div>
                            <IoFileTrayStacked />
                        </div>
                    </IconContext.Provider>
                    <h1 className='ml-1 text-lg font-medium'>Lotes</h1>
                </ABoxHeaderTitle>
                <ABreadcumb links={
                    [
                        { label: "Lotes", url: "/lotes", linked: true },
                        { label: "Adicionar Lotes", url: "/lotesadd", linked: false }
                    ]
                } />
            </ABoxHeader>

            <ABoxHeader>
                <AButtomAdd />
                <AInputSearch place="Buscar por lote" />
            </ABoxHeader>

            <ABoxBody>



            </ABoxBody>
            <ABoxFooter>
                <Pagination />
            </ABoxFooter>
        </ABoxAll>
    );
};

export default LotesAdd;
