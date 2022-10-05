import { ColumnActionsMode, IColumn, Panel, PanelType, SelectionMode, ShimmeredDetailsList, Stack } from "@fluentui/react";
import { IBrand } from "@typesCustom";
import { useEffect, useState } from "react";
import { MessageBarCustom } from "../../components/MessageBarCustom";
import { PageToolBar } from "../../components/PageToolBar";
import { listBrands } from "../../services/server";


export function BrandPage() {

    //Entities
    const [brand, SetBrand ] = useState<IBrand>({} as IBrand)
    const [brands, SetBrands ] = useState<IBrand[]>([])

    //State - messages
    const [ messageError, setMessageError] = useState('');
    const [ messageSucces, setMessageSucces] = useState('');

    //State loading

    const [loading, setLoading] = useState(true);

    //Colunas
    const coluns: IColumn[] = [
        {
            key: 'name',
            name: 'Nome da Marca',
            fieldName: 'name',
            minWidth: 100,
            isResizable: false,
            columnActionsMode: ColumnActionsMode.disabled
        }
    ]

    useEffect(()=> {

        listBrands()
            .then(result => {
                SetBrands{result.data}
            })
            .catch(error => {
                console.log('Deu pau', error.message)
                setInterval(() =>{
                    handleDemissMessageBar();
                }, 10000);
            })
            .finally(() => setLoading(false))

    }, [])

    function handleDemissMessageBar() {
        setMessageError('');
        setMessageSucces('');
    }

    function handleNew() {


    }

    return(
        <div id="brand-page" className="main-containt">
            <Stack horizontal={false}>
                <PageToolBar
                    currentPageTitle="Marcos"
                    loading={loading}
                    onNew={ handleNew }/>

                <MessageBarCustom
                    messageError={messageError}
                    messageSuccess={messageSucces}
                    onDismiss={handleDemissMessageBar} />

                <div className="data-list">
                    <ShimmeredDetailsList
                        items={brands}
                        columns={coluns}
                        setKey="set"
                        enableShimmer={loading}
                        selectionMode={SelectionMode.none} />
                </div>
            </Stack>

            <Panel>
                className="panel-form"
                isOpen={}
                type={PanelType.medium}
                headerText="Cadastro de Marca"
                isFooterAtBottom={true}
                onDemiss
                <p>Preencha Todos os campos obrigatórios identificados por <span className="required"<*>/span></p>

                <Stack horizontal={false} className="panel-form-content>
                    <TextField
                        label="Nome da Marca"
                        required
                        value={brand.name}
                        onChange={event => SetBrand({...brand, name: {event.target as }})}
                </Stack>
            </Panel>
        </div>
    )
}