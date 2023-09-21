import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const EmptyItem = () => {
    return (
        <C.EmptyTable>
            😵‍💫 Não há nada para visualizar nesse mês.
        </C.EmptyTable>
    )
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                {list.length === 0 ? (<EmptyItem />) : (
                    <tr>
                        <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                        <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                        <C.TableHeadColumn>Título</C.TableHeadColumn>
                        <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                    </tr>
                )}
            </thead>

            <tbody>
                {list.map((item, index) => (<TableItem key={index} item={item} />))}
            </tbody>
        </C.Table>
    );
}