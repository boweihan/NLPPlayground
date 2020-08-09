FROM python:3
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8081
ENTRYPOINT ["python3"]
CMD ["app.py"]