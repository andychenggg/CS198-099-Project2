import React from 'react';
import {ImageViewer, Image, Space} from 'tdesign-react';
import {BrowseIcon} from 'tdesign-icons-react'

// const SingleImageViewer = ({img, style}) => {
//     const trigger = ({open}) => {
//         const mask = (
//             <div
//                 style={{
//                     background: 'rgba(0,0,0,.6)',
//                     color: '#fff',
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                 }}
//                 onClick={open}
//             >
//                 <span><BrowseIcon size="16px" name={'browse'}/> view</span>
//             </div>
//         );
//
//         return (
//             <Image
//                 alt={'test'}
//                 src={img}
//                 overlayContent={mask}
//                 overlayTrigger="hover"
//                 fit="contain"
//                 style={{
//                     width: 160,
//                     height: 160,
//                     border: '4px solid var(--td-bg-color-secondarycontainer)',
//                     borderRadius: 'var(--td-radius-medium)',
//                     backgroundColor: '#fff'
//                 }}
//             />
//         )
//     }
//
//     return (
//         <Space breakLine size={16}>
//             <ImageViewer draggable mode="modeless" title="view" trigger={trigger} images={[img]}/>
//         </Space>
//     );
// }
// export default SingleImageViewer

export default function SingleImageViewer({img, style, title}) {
    const trigger = ({open}) => {
        const mask = (
            <div
                style={{
                    background: 'rgba(0,0,0,.6)',
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={open}
            >
                <span><BrowseIcon size="16px" name={'browse'}/> view</span>
            </div>
        );

        return (
            <Image
                alt={'test'}
                src={img}
                overlayContent={mask}
                overlayTrigger="hover"
                fit="contain"
                style={style}
            />
        )
    }

    return (
        <Space breakLine size={16}>
            <ImageViewer draggable mode="modeless" title={title} trigger={trigger} images={[img]}/>
        </Space>
    );
}
