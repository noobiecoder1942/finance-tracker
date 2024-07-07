"use client";

export default function UserItem({ isOpen }: { isOpen: boolean }) {
    return <div className={`flex items-center justify-${isOpen ? 'between' : 'center'} gap-2 ${isOpen ? 'border rounded-[8px]' : ''} p-2 transition-all`}>
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700]
        flex items-center justify-center">
            <p>FL</p>
        </div>
        {isOpen && (
            <div className="grow">
                <p className="test-[16px] font-bold">FirstName LastName</p>
                <p className="test-[12px] text-neutral-500">firstlast@gmail.com</p>
            </div>
        )}
    </div>
}