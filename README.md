# docker-web-server


volumes:
  - ./nginx.conf:/etc/nginx/nginx.conf
这种方式是将宿主机上的一个具体文件（nginx.conf）直接挂载到容器中 Nginx 的主配置文件所在的位置。通常，Nginx 的主配置文件位于 /etc/nginx/nginx.conf。这意味着您可以直接编辑宿主机上的 nginx.conf 文件，并且容器中的 Nginx 服务将使用这个文件作为其主配置。


volumes:
  - ./nginx-conf:/etc/nginx/conf.d
这种方式是将宿主机上的一个目录（nginx-conf）挂载到容器中的 /etc/nginx/conf.d 目录。在 Nginx 配置中，/etc/nginx/conf.d 目录通常用于存放服务器的配置片段或单独的站点配置。Nginx 会自动包含这个目录下的所有 .conf 文件。如果您有多个站点配置或者想要组织您的配置文件，这种方式会更加有用。

