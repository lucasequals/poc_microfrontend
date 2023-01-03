import React, { useState } from "react";
import { arrBlogs } from "./Constant";
import { Panel } from 'primereact/panel';
import "./index.css";

export const Blogs = () => {
  return (
    <div className="col-12">
      <div className="row">
        {arrBlogs.map((blog, index) => {
          return (
            <>
              {Object.keys(blog).length > 0 && (
                <Panel key={index} header={blog.blogName} className="mt-2">
                  <p>{blog.blogDetail}</p>
                  <p>Saiba mais: <a href={blog.blogURL}>{blog.blogURL}</a></p>
                </Panel>
              )}
              {Object.keys(blog).length === 0 && (
                <p>Nenhuma postagem encontrada.</p>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
