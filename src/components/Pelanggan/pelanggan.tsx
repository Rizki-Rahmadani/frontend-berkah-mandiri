import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Header } from "../header";
import { AddButton } from "../CustomButton/add-button";
import { PelangganProps } from "@/lib/types";

const pelanggan: PelangganProps[] = [
  {
    id: 1,
    name: "Kotrel",
    phone: "082299098221",
    address: "Medan",
  },
  {
    id: 2,
    name: "Arya",
    phone: "082299098234",
    address: "Bali",
  },
  {
    id: 3,
    name: "Medi",
    phone: "082299098245",
    address: "Lampung",
  },
  {
    id: 4,
    name: "Farhan",
    phone: "082299098256",
    address: "Jakarta Selatan",
  },
  {
    id: 5,
    name: "Veni",
    phone: "082299098267",
    address: "Padang",
  },
  {
    id: 6,
    name: "Yudis",
    phone: "082299098278",
    address: "Kalimantan Timur",
  },
  {
    id: 7,
    name: "Muja",
    phone: "082299098289",
    address: "Tangerang",
  },
];

export function CompPelanggan() {
  return (
    <div className="space-y-3 w-[80%]">
      <div className="flex justify-between">
        <div className="text-start font-medium tracking-wide text-[25px] text-[#2C3639] ">
          <Header title="Data Pelanggan" />
        </div>
        <div className="bg-[#2C3639] p-2 rounded-md text-[#DCD7C9] flex items-center gap-2">
          <AddButton text="Tambah Pelanggan" onClick={() => {}} />
        </div>
      </div>

      <Table className="">
        <TableCaption>Daftar pelanggan lapak berkah mandiri.</TableCaption>
        <TableHeader className="bg-slate-300">
          <TableRow>
            <TableHead className="w-[100px] text-center text-primary">
              ID
            </TableHead>
            <TableHead className="text-center text-primary">Nama</TableHead>
            <TableHead className="text-center text-primary">
              Telepon
            </TableHead>
            <TableHead className="text-right text-primary">Alamat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pelanggan.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium text-primary">
                {data.id}
              </TableCell>
              <TableCell className="text-primary">{data.name}</TableCell>
              <TableCell className="text-primary">{data.phone}</TableCell>
              <TableCell className="text-right text-primary">
                {data.address}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
