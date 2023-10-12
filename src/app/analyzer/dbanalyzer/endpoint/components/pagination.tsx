import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


export default function Pagination({
    totalResults,
    resultsPerPage,
    currentPage,
    onPageChange
}:{
    totalResults: number,
    resultsPerPage: number,
    currentPage: number,
    onPageChange: (page: number) => void
}) {
    return (
        <div className="flex items-center justify-between border-t border-gray-200
         bg-white px-4 py-3 sm:px-6">
          
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{
                            (currentPage - 1) * resultsPerPage + 1
                        }</span> to <span className="font-medium">{
                            (currentPage - 1) * resultsPerPage + resultsPerPage
                        }</span> of{' '}
                        <span className="font-medium">{
                            totalResults
                        }</span> Endpoints
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                       
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {Math.ceil(totalResults / resultsPerPage) < 10 ? 
                            Array.from({ length: Math.ceil(totalResults / resultsPerPage) }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                    type='button'
                                    aria-current="page"
                                    className={`relative inline-flex items-center 
                                    px-4 py-2 text-sm font-semibold 
                                    ${page === currentPage ? 
                                        'text-white bg-primary-950' : 
                                        'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                                        }`
                                    }
                                >
                                    {page}
                                </button>
                            )) :
                           (<>
                                <button
                                 type='button'
                                 aria-current="page"
                                 className={`relative inline-flex items-center 
                                 px-4 py-2 text-sm font-semibold 
                                
                                     text-gray-900 ring-1 ring-inset ring-gray-300
                                      hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                                     `}
                                    onClick={() => onPageChange(currentPage - 1)}
                                >Previous</button>
                                <button
                                className={`relative inline-flex items-center 
                                px-4 py-2 text-sm font-semibold  mx-2
                               
                                    text-gray-900 ring-1 ring-inset ring-gray-300
                                     hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                                    `}
                                    onClick={() => onPageChange(currentPage + 1)}
                                >Next</button>
                           </>)
                        }

                      
                    </nav>
                </div>
            </div>
        </div>
    )
}