import { User } from '../interfaces'

type Props = {
    data: User
  }

const Card = ({ data }: Props) => (
    <div className="w-1/3 px-5 py-5">
        <div className=" rounded-lg overflow-hidden shadow-lg bg-gray-300">
            <div className="px-6 py-4">
                <div className="font-semibold text-xl text-gray-800">The Coldest Sunset</div>
                <p className="text-gray-600 text-base">Lorem ipsum</p>
            </div>
            <img className="w-full" src="/harrison.jpg" alt="Sunset in the mountains"/>
        </div>
    </div>
    
)

export default Card;