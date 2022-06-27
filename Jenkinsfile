pipeline {
    agent { docker { image 'node' } }
    stages {
        stage('build') {
            steps {
                sh 'echo building stage started ! '
                sh 'node --version'
            }
        }

        stage('test') {
            steps {
                sh 'node --version'
            }
        }

        stage('deploy') {
            steps {
                sh 'node --version'
            }
        }

        stage('post-deploy') {
            steps {
                sh 'node --version'
            }
        }
        stage('pre-deploy') {
            steps {
                sh echo 'pre-deploy'
                sh 'node --version'
            }
        }

        stage('pre-build') {
            steps {
                sh 'node --version'
            }
        }
        stage('post-build') {
            steps {
                sh 'echo building stage finished ! '
                sh 'node --version'
            }
        }

        stage('post-promote') {
            steps {
                sh 'node --version'
            }
        }

        stage('pre-promote') {
            steps {
                sh 'node --version'
            }
        }
    }
    
}