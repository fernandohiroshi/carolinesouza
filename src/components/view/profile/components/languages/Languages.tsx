import Box from '@/components/grid/Box'

export default function Languages() {
  return (
    <Box className="col-span-7 flex items-center border lg:col-span-4">
      <div className="flex w-full flex-col gap-2 py-2">
        <div className="inline-flex w-full items-center justify-between gap-2">
          <p className="text-sm">Ingles</p>
          <div className="relative w-full max-w-[55%] rounded-sm bg-neutral-300 p-2 shadow md:max-w-[70%]">
            <div className="absolute left-0 top-0 w-[40%] animate-pulse rounded-sm bg-gradient-to-r from-transparent to-pink-400 p-2" />
          </div>
        </div>

        <div className="inline-flex w-full items-center justify-between gap-2">
          <p className="text-sm">Espanhol</p>
          <div className="relative w-full max-w-[55%] rounded-sm bg-neutral-300 p-2 shadow md:max-w-[70%]">
            <div className="absolute left-0 top-0 w-[70%] animate-pulse rounded-sm bg-gradient-to-r from-transparent to-cyan-400 p-2" />
          </div>
        </div>
      </div>
    </Box>
  )
}
