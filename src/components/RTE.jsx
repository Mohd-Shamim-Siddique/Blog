import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

const RTE = ({ name, control, label, defaultValue = "" }) => {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller
                name={name || 'content'}
                control={control}
                defaultValue={defaultValue}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <Editor
                        value={value}
                        apiKey='8kx0hc0id5vx5bpnl109flmwnxb16sbmh50zqiv4xp0sodk4'
                        onEditorChange={onChange}
                        init={{
                            height: 500,
                            menubar: true,
                            readonly: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'preview', 'anchor', 'searchreplace', 'visualblocks', 'code',
                                'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                            ],
                            toolbar:
                                'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image link | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        }}
                    />
                )}
            />
        </div>
    );
};

export default RTE;
