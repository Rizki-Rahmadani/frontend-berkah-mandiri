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
import { BarangProps } from "@/lib/types"
import React, { useEffect, useState } from "react"

interface DialogAddBarangProps {
  mode?: 'add' | 'edit'
  data?: BarangProps
  trigger?: React.ReactNode
}

export function DialogAddBarang({mode = 'add', data, trigger}: DialogAddBarangProps) {
  const [formDataBarang, setFormDataBarang] = useState({
    name: '',
    defaultPrice: 0
  })

  useEffect(() => {
    if (mode === 'edit' && data) {
      setFormDataBarang({
        name: data.name,
        defaultPrice: data.defaultPrice
      })
    }
  }, [mode, data])

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    setFormDataBarang(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = () => {
    console.log("Data yang akan disimpan", formDataBarang);
    
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-green-500 hover:bg-green-700">Tambah Barang</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode === 'add' ? 'Tambah Barang' : 'Ubah Barang'}</DialogTitle>
          <DialogDescription>
            {mode === 'add' ? 'Isi data barang baru.' : 'Ubah data barang'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Nama Barang
            </Label>
            <Input id="name" value={formDataBarang.name} onChange={handelChange} placeholder="Nama Barang" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="defaultPrice" className="text-left">
              Harga Awal
            </Label>
            <Input id="defaultPrice" value={formDataBarang.defaultPrice} onChange={handelChange} placeholder="Harga Awal" className="col-span-2" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} className="bg-green-500 hover:bg-green-700">{mode === 'add' ? 'Simpan' : 'Perbarui'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
