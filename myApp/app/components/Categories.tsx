import Image from 'next/image';

const Categories = () => {
    return (
        <div className="pt-5 cursor-pointer pb-7 flex items-center space-x-12">
            <div className="pl-3 pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_beach.jpg"
                    alt="Category - Beach"
                    width={30}
                    height={20}
                />
                <span className='text-xs'>Beach</span>
            </div>
            <div className="pb-5 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/villa.jpg"
                    alt="Category - Villa"
                    width={30}
                    height={20}
                />
                <span className='text-xs'>Villa</span>
            </div>
            <div className="pb-5 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/house.jpg"
                    alt="Category - Penthouse"
                    width={30}
                    height={20}
                />
                <span className='text-xs'>Penthouse</span>
            </div>
            <div className="pb-5 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/tinyhome.jpg"
                    alt="Category - Tiny homes"
                    width={30}
                    height={20}
                />
                <span className='text-xs'>Tiny homes</span>
            </div>
        </div>
    )
}

export default Categories;
