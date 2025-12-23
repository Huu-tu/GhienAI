import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import FormUploadFile from 'components/custom/Form/FormUploadFile'
import { useUploadDocument } from 'libs/hooks';
import { UploadFilePayload } from 'types/index'

const ModalAddUpdateDoc = () =>{
  const { mutate: uploadDocument } = useUploadDocument()


  const handleUploadDocument = async (files: File[]) =>{
    const formData = new FormData()
    files.forEach((file) => {
      formData.append("file", file)
    })

    try {
      uploadDocument(
        formData as UploadFilePayload,
        {
          onSuccess: () =>{
            window.location.reload();
          },
        },
      )
    }catch (err){
      console.error('Error uploading blog:', err);
    }
  }

  return(
    <div className="container">
      <div className="mx-auto max-w-6xl  flex flex-wrap justify-center">
        <div className="w-full lg:w-10/12">
          <SectionHeading
            title={['Modal add document']}
            subtitle=""
          />
          <div className="mb-10 flex flex-wrap items-center justify-between  border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
            <FormUploadFile onUpload={handleUploadDocument} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddUpdateDoc;