export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div>
        <h1 className="text-5xl text-blue-400 font-bold">Merhaba</h1>
      </div>
      <div className="mb-32 mt-12  text-center flex lg:flex-col">
        <div className="w-1/4 lg:w-full lg:border-gray-300 lg:mt-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
          <h2 className={`mb-3 text-2xl font-semibold`}>WIFI</h2>
          <p className="text-blue-200 font-bold  italic"> Ağ adı:</p>
          <p className="text-sm">FiberHGW_VE672B_2.4GHz_EXT</p>
          <p className="text-blue-200 font-bold  italic mt-4">Şifre:</p>
          <p className="text-sm">kJn9puxhREL4</p>
        </div>
        <div className="w-1/4 lg:w-full lg:border-gray-300 lg:mt-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Adres</h2>
          <p className="text-sm">
            Hedef Sokak, Bina no: 9, Daire no: 9, Kat: 4, Yalı Mahallesi, Yalı
            Marin Apt., Maltepe, İstanbul
          </p>
        </div>
        <div className="w-1/4 lg:w-full lg:border-gray-300 lg:mt-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>İletişim</h2>
          <p className="text-blue-200 font-bold  italic"> İsim: </p>
          <p className="text-sm">Yiğit Zarbun</p>
          <p className="text-blue-200 font-bold  italic mt-4"> Tel:</p>
          <p className="text-sm"> 05376541121</p>
          <p className="text-blue-200 font-bold  italic mt-4"> Email: </p>
          <p className="text-sm">yzarbun@gmail.com</p>
        </div>
        <div className="w-1/4 lg:w-full lg:border-gray-300 lg:mt-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>Kapı şifresi</h2>
          <p className="text-sm">**1234</p>
        </div>
      </div>
    </main>
  );
}
