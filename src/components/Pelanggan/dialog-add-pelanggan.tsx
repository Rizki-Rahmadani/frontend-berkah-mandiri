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
import { PelangganProps } from "@/lib/types"
import { useState, useEffect } from "react"

interface DialogAddPelangganProps {
  mode?: 'add' | 'edit';
  data?: PelangganProps;
  trigger?: React.ReactNode;
}

export function DialogAddPelanggan({ mode = 'add', data, trigger }: DialogAddPelangganProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (mode === 'edit' && data) {
      setFormData({
        name: data.name,
        phone: data.phone,
        address: data.address
      });
    }
  }, [mode, data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    // Implementasi penyimpanan data akan ditambahkan nanti
    console.log('Data yang akan disimpan:', formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-green-500 hover:bg-green-700">Tambah Pelanggan</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode === 'add' ? 'Tambah Pelanggan' : 'Ubah Pelanggan'}</DialogTitle>
          <DialogDescription>
            {mode === 'add' ? 'Isi data pelanggan baru.' : 'Ubah data pelanggan.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Nama
            </Label>
            <Input 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama pelanggan" 
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-left">
              Telepon
            </Label>
            <Input 
              id="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="Nomor HP" 
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-left">Alamat</Label>
            <Input 
              id="address" 
              value={formData.address}
              onChange={handleChange}
              placeholder="Alamat" 
              className="col-span-3" 
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700"
          >
            {mode === 'add' ? 'Simpan' : 'Perbarui'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
