// dialog-add-pelanggan.tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogAddBarang() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-700">Tambah Barang</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Barang</DialogTitle>
          <DialogDescription>
            Isi data barang baru.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Nama Barang
            </Label>
            <Input id="name" placeholder="Nama Barang" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="defaultPrice" className="text-left">
              Harga Awal
            </Label>
            <Input id="defaultPrice" placeholder="Harga Awal" className="col-span-2" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-green-500 hover:bg-green-700">Simpan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
