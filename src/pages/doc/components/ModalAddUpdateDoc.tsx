import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'

const ModalAddUpdateDoc = () =>{
  return(
    <div className="container">
      <div className="mx-auto max-w-6xl  flex flex-wrap justify-center">
        <div className="w-full lg:w-10/12">
          <SectionHeading
            title={['Modal add blog']}
            subtitle=""
          />
          <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">

          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddUpdateDoc;