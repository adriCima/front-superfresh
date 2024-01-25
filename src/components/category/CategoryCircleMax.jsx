export default function CategoryCircleMax( category ) {
  return(
    <>
        <div className="flex w-full h-96 items-center justify-center relative">
          <a href='#'>
            <div className="flex flex-col my-8 items-center text-center justify-center gap-2 w-full ">
              <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-gray-800">
                <img src={ category.img } alt={category.name} className="w-full h-full object-cover rounded-full"/>
              </div>
              <h2 className="text-gray-800 font-bold text-xl capitalize">{category.name}</h2>
            </div>
          </a>
        </div>
    </>
  )
}
