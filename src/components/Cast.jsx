import { IMAGE } from '../../config'

export function Cast ({ cast }) {
  return (
    <section className='flex flex-wrap justify-center gap-6'>

      {
          cast.slice(0, 5).map(people => (
            <div key={people.id} className='flex flex-col gap-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
              <img src={`${IMAGE}${people.profile_path}`} className='object-contain sm:w-[150px] w-7' />

              <div>
                <h2 className='mb-2 font-bold tracking-tight
               text-gray-900 dark:text-white'
                > {people.name}
                </h2>
              </div>
            </div>
          ))
        }
    </section>
  )
}
