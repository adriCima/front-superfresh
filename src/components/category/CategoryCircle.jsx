import Image from "next/image";
import Link from "next/link";


export default function CategoryCircle() {
  return(
    <>
         <div className="w-full">
          <Link href='#'>
            <div className="flex flex-col my-8 items-center text-center justify-center gap-2 w-full ">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-800">
                <Image
                className=""
                  width={1200}
                  height={1200}
                  src={`/img/categorias/bulbos.jpg`}
                  alt='bulbos'
                />
              </div>
              <h2 className="text-gray-800 font-bold text-lg">Bulbos</h2>
            </div>
          </Link>
        </div>
    </>
  )
}
