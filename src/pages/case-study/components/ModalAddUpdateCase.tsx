import { useState } from 'react';
import SectionHeading from 'components/sectionHeading/ColoredSectionHeading'
import { useCreateCase } from 'libs/hooks';
import { CaseStudyPayload } from 'types/index'

const ModalAddUpdateCase = ()=>{
  const { mutate: createCase } = useCreateCase();

  const[file, setFile] = useState(null);
  const[data, setData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    image: "",
    type:""
  });

  const handleChange = async (e:any) =>{
    setData({...data, [e.target.name]: e.target.value});
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('shortDescription', data.shortDescription);
    formData.append('description', data.description);
    formData.append('type', data.type);

    if (file) {
      formData.append('image', file);
    }

    try {
      createCase(
        formData as CaseStudyPayload,
        {
          onSuccess: () => {
            window.location.reload();
          },
        },
      );
    } catch (err) {
      console.error('Error uploading case:', err);
    }
  };

  return(
    <div className="container">
      <div className="mx-auto max-w-6xl  flex flex-wrap justify-center">
        <div className="w-full lg:w-10/12">
          <SectionHeading
            title={['Modal add Case Study']}
            subtitle=""
          />
          <div
            className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
          >
            <form onSubmit={submitHandler}>
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input type="text" name="title" id="title"
                       onChange={handleChange} value={data.title}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Nhập tiêu đề" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mô tả ngắn
                </label>
                <input type="textarea" name="shortDescription" id="shortDescription"
                       onChange={handleChange} value={data.shortDescription}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Nhập văn bản" />
              </div>
              <div>
                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kiểu nội dung
                </label>
                <select id="type"
                        name="type" value={data.type} onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option >Select your type</option>
                  <option value={'blog'}>Blog</option>
                  <option value={'doc'}>Tài liệu</option>
                  <option value={'service'}>Dịch vụ</option>
                  <option value={'solution'}>Giải pháp</option>
                </select>
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Ảnh
                </label>
                <input type="file"  name="image" id="image"
                       onChange={handleChange}
                       accept=".png,.jpeg,.jpg"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="12" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mổ tả chi tiết
                </label>
                <input type="textarea" name="description" id="description"
                       onChange={handleChange} value={data.description}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Nhập văn bản" />
              </div>

              <button type="submit"
                      className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 ">
                Add blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalAddUpdateCase;