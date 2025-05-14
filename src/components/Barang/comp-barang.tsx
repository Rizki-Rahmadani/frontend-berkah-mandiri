import { BarangProps } from "@/lib/types"
import { Header } from "../header"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { DialogAddBarang } from "./dialog-add-barang"

export const CompBarang = () => {
    const DataBarang: BarangProps[] = [
        {
            id: 1,
            name: "Besi",
            defaultPrice: 4500
        },
        {
            id: 2,
            name: "Ember",
            defaultPrice: 2000
        },
        {
            id: 3,
            name: "Naso",
            defaultPrice: 3000
        },
        {
            id: 4,
            name: "Kaleng",
            defaultPrice: 2700
        },
        {
            id: 5,
            name: "Box",
            defaultPrice: 2000
        },
    ]
    return (
        <div className="w-[80%] space-y-3">
            <div className="flex justify-between">
                <div className="text-start font-medium tracking-wide text-[25px] text-[#2C3639] ">
                    <Header title="Data Barang"/>
                </div>
                <div>
                    <DialogAddBarang mode="add"/>
                </div>
            </div>
            <Table>
                <TableCaption>Data Barang</TableCaption>
                <TableHeader className="bg-slate-300">
                    <TableRow>
                        <TableHead className="text-center text-primary">ID</TableHead>
                        <TableHead className="text-center text-primary">Nama Barang</TableHead>
                        <TableHead className="text-center text-primary">Harga Default</TableHead>
                        <TableHead className="text-end text-primary">Aksi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {DataBarang.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.defaultPrice}</TableCell>
                            <TableCell className="flex justify-end gap-2">
                                <DialogAddBarang mode="edit" data={data} trigger={<Button className="bg-blue-500">Ubah</Button>}/>
                                <Button className="bg-red-500">Hapus</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}