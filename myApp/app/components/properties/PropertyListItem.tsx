import Image from "next/image";

const PropertyListItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src='/images/beach_1.jpg'
                    sizes="(max-width: 568px) 568px, (max-width: 1000px): 568px, 568px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house"
                />
            </div>
            <div className="mt-2">
                <p className="text-lg font-bold">Property name</p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>$200</strong> per night</p>
            </div>
        </div>
    );
};

export default PropertyListItem;
