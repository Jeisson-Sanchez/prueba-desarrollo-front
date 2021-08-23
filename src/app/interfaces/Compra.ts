export interface Compra {
    id?: string;
    nombre_cliente: string;
    id_producto: string;
    cantidad: string;
    precio_total: number;
    created_at?: string;
    updated_at?: string;
}