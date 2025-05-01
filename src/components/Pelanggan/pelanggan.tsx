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

const pelanggan = [
  {
    id: "01",
    name: "Kotrel",
    phone: "082299098221",
    address: "Medan",
  },
  {
    id: "02",
    name: "Arya",
    phone: "082299098234",
    address: "Bali",
  },
  {
    id: "03",
    name: "Medi",
    phone: "082299098245",
    address: "Lampung",
  },
  {
    id: "04",
    name: "Farhan",
    phone: "082299098256",
    address: "Jakarta Selatan",
  },
  {
    id: "05",
    name: "Veni",
    phone: "082299098267",
    address: "Padang",
  },
  {
    id: "06",
    name: "Yudis",
    phone: "082299098278",
    address: "Kalimantan Timur",
  },
  {
    id: "07",
    name: "Muja",
    phone: "082299098289",
    address: "Tangerang",
  },
];

export function CompPelanggan() {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <div className="text-start text-xl font-bold text-[#2C3639] ">
          <Header title="Data Pelanggan" />
        </div>
        <div className="bg-[#2C3639] p-2 rounded-md text-[#DCD7C9] flex items-center gap-2">
          <AddButton text="Tambah Pelanggan" onClick={() => {}} />
        </div>
      </div>

      <Table className="bg-[#2C3639] rounded-md">
        <TableCaption>Daftar pelanggan lapak berkah mandiri.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center text-[#DCD7C9]">
              ID
            </TableHead>
            <TableHead className="text-center text-[#DCD7C9]">Nama</TableHead>
            <TableHead className="text-center text-[#DCD7C9]">
              Telepon
            </TableHead>
            <TableHead className="text-right text-[#DCD7C9]">Alamat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pelanggan.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium text-white">
                {data.id}
              </TableCell>
              <TableCell className="text-white">{data.name}</TableCell>
              <TableCell className="text-white">{data.phone}</TableCell>
              <TableCell className="text-right text-white">
                {data.address}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
