
FROM mcr.microsoft.com/dotnet/aspnet:3.1.23-bullseye-slim-arm32v7

WORKDIR /App
#RUN rm -rf /out/out
#COPY ../frontend/dist/frontend /frontend/dist
COPY /out .
COPY eBook.sqlite .
RUN rm -rf dir

ENTRYPOINT ["dotnet", "netbooks.dll"]
