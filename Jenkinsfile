pipeline {
    agent { docker { image 'node' } }
    stages {
        stage('build') {
            steps {
                sh 'echo building stage started ! '
                sh 'node --version'
            }
        }
    }
    //add test stage
    stages {
        stage('test') {
            steps {
                sh 'node --version'
            }
        }
    }

    //add deploy stage
    stages {
        stage('deploy') {
            steps {
                sh 'node --version'
            }
        }
    }

    //add post-deploy stage
    stages {
        stage('post-deploy') {
            steps {
                sh 'node --version'
            }
        }
    }
    //add pre-deploy stage
    stages {
        stage('pre-deploy') {
            steps {
                sh echo 'pre-deploy'
                sh 'node --version'
            }
        }
    }
    //add pre-build stage
    stages {
        stage('pre-build') {
            steps {
                sh 'node --version'
            }
        }
    }
    //add post-build stage
    stages {
        stage('post-build') {
            steps {
                sh 'echo building stage finished ! '
                sh 'node --version'
            }
        }
    }
    //add post-promote stage
    stages {
        stage('post-promote') {
            steps {
                sh 'node --version'
            }
        }
    }
    //add pre-promote stage
    stages {
        stage('pre-promote') {
            steps {
                sh 'node --version'
            }
        }
    }
    //add pre-release stage
}