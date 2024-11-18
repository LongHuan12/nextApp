import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div
                    onClick={() => setCategory('Beach')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-gray-800' : 'border-white' }  opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/images/icn_category_beach.jpg"
                        alt="Category - Beach"
                        width={30}
                        height={20}
                    />
                    <span className='text-xs'>Beach</span>
                </div>
                <div
                    onClick={() => setCategory('Villa')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villa' ? 'border-gray-800' : 'border-white' }  opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/images/villa.jpg"
                        alt="Category - Villa"
                        width={30}
                        height={20}
                    />
                    <span className='text-xs'>Villa</span>
                </div>
                <div
                    onClick={() => setCategory('Penthouse')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Penthouse' ? 'border-gray-800' : 'border-white' }  opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/images/house.jpg"
                        alt="Category - Penthouse"
                        width={30}
                        height={20}
                    />
                    <span className='text-xs'>Penthouse</span>
                </div>
                <div
                    onClick={() => setCategory('Tiny homes')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-gray-800' : 'border-white' }  opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image
                        src="/images/tinyhome.jpg"
                        alt="Category - Tiny homes"
                        width={30}
                        height={20}
                    />
                    <span className='text-xs'>Tiny homes</span>
                </div>
            </div>
        </>
    )
}

export default Categories