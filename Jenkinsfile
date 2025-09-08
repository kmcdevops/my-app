pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/my-app.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t my-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop my-app || true
                docker rm my-app || true
                docker run -d --name my-app -p 8080:8080 my-app:latest
                '''
            }
        }
    }
}
