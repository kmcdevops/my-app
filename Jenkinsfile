pipeline {
    agent any

    stages {
        // Stage 1: Checkout code from GitHub
        stage('Checkout') {
            steps {
                // Replace with your GitHub repository URL
                git branch: 'main', url: 'https://github.com/kmcdevops/my-app.git'
            }
        }

        // Stage 2: Build
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Add your actual build commands here, e.g., sh 'mvn clean install'
            }
        }

        // Stage 3: Test
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your actual test commands here
            }
        }

        // Stage 4: Deploy
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment commands here
            }
        }
    }
}
