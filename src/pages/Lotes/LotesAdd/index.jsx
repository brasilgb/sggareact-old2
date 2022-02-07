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
                        { label: "Lotes", url: "/lotes", linked: false }
                    ]
                } />
            </ABoxHeader>

            <ABoxHeader>
                <AButtomAdd />
                <AInputSearch place="Buscar por lote" />
            </ABoxHeader>

            <ABoxBody>

                <ATable>
                    <ATr thead={true}>
                        <ATh>Lote</ATh>
                        <ATh>Fêmeas</ATh>
                        <ATh>Capitalizadas/Data</ATh>
                        <ATh>Machos</ATh>
                        <ATh>Capitalizadas/Data</ATh>
                        <ATh>Total Aves</ATh>
                        <ATh>Aviários</ATh>
                        <ATh>Cadastro</ATh>
                        <ATh></ATh>
                    </ATr>
                    <ATr thead={false}>
                        <ATd>1</ATd>
                        <ATd>5800</ATd>
                        <ATd>5750</ATd>
                        <ATd>1250</ATd>
                        <ATd>1190</ATd>
                        <ATd>12</ATd>
                        <ATd>data</ATd>
                        <ATd></ATd>
                    </ATr>

                </ATable>

            </ABoxBody>
            <ABoxFooter>
                <Pagination />
            </ABoxFooter>
        </ABoxAll>
    );
};

export default LotesAdd;
