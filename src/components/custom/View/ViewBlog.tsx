// import {prisma} from 'libs/db';
// interface Props {
//   id: string;
// }
// const ViewBlog = async ({ id }: Props) =>{
//   const SingleBlog = await prisma.blog.findUnique({
//     where: { id },
//     select: {
//       title: true,
//       paragraph: true,
//       content: true,
//       imageUrl: true,
//       type: true,
//       createdAt: true,
//     }
//   });
//   console.log(SingleBlog)
//
//   return(
//     <div className="mx-auto max-w-6xl px-3">
//       {/*<SectionHeading*/}
//       {/*  title={[`${blog?.title}`]}*/}
//       {/*  subtitle=""*/}
//       {/*/>*/}
//       {/*<div className="grid gap-4 sm:grid-cols-2 sm:gap-6"*/}
//       {/*     dangerouslySetInnerHTML={{ __html: blog?.content || '' }}>*/}
//       {/*</div>*/}
//     </div>
//   )
// }
//
// export default ViewBlog;