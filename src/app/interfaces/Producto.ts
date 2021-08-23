export interface Producto {
    id?: string;
    producto: string;
    cantidad: string;
    numero_lote: string;
    fecha_vencimiento: string;
    precio: string;
    estado_producto?: string;
    created_at?: string;
    updated_at?: string;
}